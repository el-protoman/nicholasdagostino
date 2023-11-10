"use client"; // this is a client component 👈🏽
import { useState } from "react"
import { SiteGrid } from "./Site-Grid"
import Counter from './Counter';
import FilterableList from "./Site-Tags"

export default function ProjectsPage() {
    const [tags, setTags] = useState(['React', 'NextJS', 'TypeScript', "HTML/CSS", "Bootstrap", "Sveltekit", "TailwindCSS", "MaterialUI", "Ant-d", "Python", "langchain", "AWS"]);

    const links = [
        {
            imageUrl: 'site1.png',
            siteUrl: 'https://main.d2nrt77207ppib.amplifyapp.com/',
            title: 'Codecademy Frontend capstone',
            description: 'React-redux app, reddit minimalist app', href: 'https://main.d2nrt77207ppib.amplifyapp.com/', classes: ["React", "HTML/CSS", "MaterialUI"]
        },
        {
            imageUrl: 'musk-gpt-deployed.png',
            siteUrl: 'https://npacts-dev.vercel.app/',
            title: 'NextJS - Mindsdb Twitter Bot',
            description: 'NextJS app powered by Mindsdb Flask backend', href: "https://npacts-dev.vercel.app/", classes: ["nextjs", "Python", "langchain"]
        },
        {
            imageUrl: 'site1.png',
            siteUrl: 'https://ai-code-translator-neon-one.vercel.app/',
            title: 'NextJS - OpenAI Code Translator',
            description: 'NextJS app powered by OpenAI', href: "https://ai-code-translator-neon-one.vercel.app/", classes: ["nextjs", "React"]

        },
        {
            imageUrl: 'site1.png',
            siteUrl: 'https://mealmetrics-copilot-pied.vercel.app/',
            title: 'OPENAI - Meal Prompter',
            description: 'NextJS Chat app powered by GPT3 built with Express and Github Copilot',
        },
        {
            imageUrl: 'site1.png',
            siteUrl: 'https://svelte-chat-dusky.vercel.app/',
            title: 'Svelte OpenAI Chat App',
            description: 'Chat app powered by OpenAI', href: "https://svelte-chat-dusky.vercel.app/", classes: ["sveltekit", "typescript", "html/css"]
        },
        {
            imageUrl: 'site1.png',
            siteUrl: 'https://seal-app-fjtqf.ondigitalocean.app/',
            title: 'Business Template',
            description: 'Your business site template by Bootstrap', href: "https://seal-app-fjtqf.ondigitalocean.app/", classes: ["html/css", "bootstrap"]
        },
        {
            imageUrl: 'site2.png',
            siteUrl: 'https://main.d2r66smm6k1y50.amplifyapp.com/html-tips',
            title: 'HTML Tips',
            description: 'NextJS app displaying tips for developers', href: "https://main.d2r66smm6k1y50.amplifyapp.com/html-tips", classes: ["nextjs", "typescript", "html/css"]
        },
        {
            imageUrl: 'site2.png',
            siteUrl: 'https://dev-mon-app.azurewebsites.net/',
            title: 'RPA Monitoring App',
            description: 'NextJS, React, NodeJS full-stack app displaying data from RPA bots', href: "https://el-protoman.github.io/SkiVlog-App/", classes: ["react", "html/css"]
        },
        { href: "https://nicholasdagostino.github.io/", classes: ["html/css"] },
        {
            imageUrl: 'site2.png',
            siteUrl: 'https://jammming-dev.vercel.app/',
            title: 'Spotify Playlist Creator',
            description: 'Basic spotify playlist creator using implicit auth with Spotify API', href: 'https://jammming-dev.vercel.app/', classes: ["react", "nextjs", "MaterialUI"]
        },

        {
            imageUrl: 'site1.png',
            siteUrl: 'https://el-protoman.github.io/SkiVlog-App/',
            title: 'Ski/Adventure Vlog App',
            description: 'Your videos from Youtube hosted on Github Pages', href: "https://dev-mon-app.azurewebsites.net/", classes: ["react", "nextjs", "typescript", "html/css"]
        },
        {
            imageUrl: 'site1.png',
            siteUrl: 'http://nickda-demo-s3.s3-website-us-east-1.amazonaws.com/',
            title: 'I Love Coffee',
            description: 'Static web site hosted by AWS', href: "http://nickda-demo-s3.s3-website-us-east-1.amazonaws.com/", classes: ["AWS", "html/css"]
        }
    ];
    const filteredLinks = links.filter((link) => {
        return link.classes !== undefined && tags.some((tag) => link.classes.includes(tag.toLowerCase()));
    });

    // const filteredLinks = links.filter((link) => {
    //     return tags.some((tag) => link.classes.includes(tag.toLowerCase()));
    // });

    return (
        <>
            <section>
                <h1 className="font-bold text-3xl font-serif">Personal</h1>
                <p className="my-5 text-neutral-800 dark:text-neutral-200">
                    This is my projects page.<br></br>

                </p>
                <Counter />
                <FilterableList tags={tags} setTags={setTags} />
                {filteredLinks.map((link) => (
                    <h1 className={link.classes?.join(' ')} key={link.href}>
                        <a href={link.href}>{link.title}</a>
                    </h1>
                ))}

            </section>
            <section>
                <div>
                    <h1>My projects</h1>
                    <SiteGrid sites={filteredLinks} />
                </div>
            </section>
        </>
    );
}
