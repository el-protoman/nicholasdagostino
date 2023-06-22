"use client"; // this is a client component 👈🏽
import { useState } from "react"
import { SiteGrid } from "./Site-Grid"
import Counter from './Counter';
import FilterableList from "./Site-Tags"

export default function ProjectsPage() {
    const [tags, setTags] = useState(['React', 'NextJS', 'TypeScript', "HTML/CSS", "Bootstrap", "Sveltekit", "TailwindCSS", "MaterialUI", "Ant-d"]);

    const links = [
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
            imageUrl: 'site1.png',
            siteUrl: 'https://el-protoman.github.io/SkiVlog-App/',
            title: 'Ski/Adventure Vlog App',
            description: 'Your videos from Youtube hosted on Github Pages', href: "https://dev-mon-app.azurewebsites.net/", classes: ["react", "nextjs", "typescript", "html/css"]
        },
    ];

    const filteredLinks = links.filter((link) => {
        return tags.some((tag) => link.classes.includes(tag.toLowerCase()));
    });

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
                    <h1 className={link.classes.join(' ')} key={link.href}>
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