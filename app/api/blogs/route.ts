import { NextResponse } from 'next/server';

export async function GET() {
    try {

        const mediumRssUrl = 'https://medium.com/feed/@hajar.aitabdielmomin';

        const response = await fetch(mediumRssUrl);
        const rssText = await response.text();

        // Parse RSS XML to extract blog data
        const blogs = parseRssToBlogs(rssText);

        console.log(`Found ${blogs.length} articles in RSS feed`);

        return NextResponse.json({ success: true, blogs, total: blogs.length });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch blogs' },
            { status: 500 }
        );
    }
}

function decodeHtmlEntities(text: string): string {
    return text
        .replace(/&#39;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&#34;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&#38;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&#60;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#62;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#160;/g, ' ')
        .replace(/&#(\d+);/g, (match, num) => String.fromCharCode(parseInt(num, 10)))
        .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function parseRssToBlogs(rssText: string) {
    // Simple RSS parser - you might want to use a library like 'rss-parser'
    const items: any[] = [];
    const itemRegex = /<item>[\s\S]*?<\/item>/g;
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
    const linkRegex = /<link>(.*?)<\/link>/;
    const descRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/;
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;

    let match;
    while ((match = itemRegex.exec(rssText)) !== null) {
        const itemContent = match[0];

        const titleMatch = titleRegex.exec(itemContent);
        const linkMatch = linkRegex.exec(itemContent);
        const descMatch = descRegex.exec(itemContent);
        const pubDateMatch = pubDateRegex.exec(itemContent);

        const rawTitle = titleMatch ? titleMatch[1] : '';
        const link = linkMatch ? linkMatch[1] : '';
        const rawDescription = descMatch ? descMatch[1] : '';
        const pubDate = pubDateMatch ? pubDateMatch[1] : '';
        
        // Decode HTML entities in title and description
        const title = decodeHtmlEntities(rawTitle);
        const description = decodeHtmlEntities(rawDescription);

        // Extract image from description HTML
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const imageMatch = imgRegex.exec(description);
        const image = imageMatch?.[1] || '/default-blog-image.jpg';

        // Clean description text
        const cleanDesc = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

        items.push({
            title,
            desc: cleanDesc,
            image,
            link,
            pubDate: new Date(pubDate).toISOString()
        });
    }

    return items;
}