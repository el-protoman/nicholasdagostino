import styles from './SiteGrid.module.css';

export function SiteGrid({ sites }) {
    const filteredSites = sites.filter((site) => site.siteUrl !== undefined);

    return (
        <div className={styles.grid}>
            {filteredSites.map((site, index) => (
                <a key={index} href={site.siteUrl}>
                    <div className={styles.gridItem}>
                        {/* <img src={site.imageUrl} alt={site.title} /> */}
                        <img src={`/images/${site.imageUrl}`} alt={site.title} />
                        <h3>{site.title}</h3>
                        <p>{site.description}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}
