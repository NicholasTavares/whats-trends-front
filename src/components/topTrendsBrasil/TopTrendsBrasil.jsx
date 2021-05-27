import React from 'react'

const TopTrendsBrasil = ({ podium, title, popularity, article }) => {

    return (
        <div className='trend'>
            <span className="trend__podium">{podium}</span>
            <span className="trend__popularity">{popularity}</span>
            <div className="trend__title">
                {title.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
            </div>
            <div className="trend__articles">
                <a className="trend__articles__item" target="_blank"
                    rel="noopener noreferrer" href={article[0].url}>{article[0].title.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}</a>
            </div>
            <div className="trend__related">
                <span>{article[0].timeAgo} por <strong>{article[0].source}</strong></span>
            </div>

            {article[1] ? <> <div className="trend__articles">
                <a className="trend__articles__item" target="_blank"
                    rel="noopener noreferrer" href={article[1].url}>{article[1].title}</a>
            </div>
                <div className="trend__related">
                    <span>{article[1].timeAgo} por <strong>{article[1].source}</strong></span>
                </div> </> : ''}

        </div>
    )
}
export default TopTrendsBrasil