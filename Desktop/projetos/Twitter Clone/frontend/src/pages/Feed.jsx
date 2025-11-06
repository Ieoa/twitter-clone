import React, { useEffect, useState } from "react";

export default function Feed() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/tweets")
            .then((r) => r.json())
            .then(setTweets)
            .catch(console.error);
    }, []);

    function logout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <div className="feed-page">
            <header className="topbar">
                <h2>OldTwitter</h2>
                <button onClick={logout}>Sair</button>
            </header>

            <main className="feed">
                <aside className="compose">
                    <div className="avatar">A</div>
                    <textarea placeholder="O que está acontecendo?" rows={4}></textarea>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <small>0/280</small>
                        <button disabled>Twittar</button>
                    </div>
                </aside>

                <section className="tweets">
                    {tweets.map((t) => (
                        <article className="tweet" key={t.id}>
                            <div className="tweet-avatar">U</div>
                            <div className="tweet-body">
                                <div className="tweet-head">
                                    <strong>{t.user}</strong>
                                    <span className="dot">·</span>
                                    <span className="time">{t.time}</span>
                                </div>
                                <p>{t.content}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}
