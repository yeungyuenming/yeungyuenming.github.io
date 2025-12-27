import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const searchItems: any[] = [];
  
  try {
    // Publications
    const publications = await getCollection('publications');
    publications.forEach((pub) => {
      searchItems.push({
        title: pub.data.title,
        content: pub.body,
        authors: pub.data.authors,
        date: pub.data.date,
        url: `/${pub.data.lang}/publications/#${pub.slug}`,
        type: 'publication',
        lang: pub.data.lang,
        snippet: pub.data.journal || pub.data.authors,
      });
    });
  } catch (e) {
    // Collection might not exist
  }
  
  try {
    // News
    const news = await getCollection('news');
    news.forEach((item) => {
      searchItems.push({
        title: item.data.title,
        content: item.body,
        date: item.data.date,
        url: `/${item.data.lang}/news/#${item.slug}`,
        type: 'news',
        lang: item.data.lang,
        snippet: item.body.substring(0, 200),
      });
    });
  } catch (e) {
    // Collection might not exist
  }
  
  try {
    // Research
    const research = await getCollection('research');
    research.forEach((item) => {
      searchItems.push({
        title: item.data.title,
        content: item.body,
        description: item.data.description,
        url: `/${item.data.lang}/research/#${item.slug}`,
        type: 'research',
        lang: item.data.lang,
        snippet: item.data.description || item.body.substring(0, 200),
      });
    });
  } catch (e) {
    // Collection might not exist
  }
  
  try {
    // Teaching
    const teaching = await getCollection('teaching');
    teaching.forEach((item) => {
      searchItems.push({
        title: item.data.title,
        content: item.body,
        description: item.data.description,
        date: item.data.term,
        url: `/${item.data.lang}/teaching/#${item.slug}`,
        type: 'teaching',
        lang: item.data.lang,
        snippet: item.data.description || item.body.substring(0, 200),
      });
    });
  } catch (e) {
    // Collection might not exist
  }
  
  return new Response(JSON.stringify(searchItems), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

