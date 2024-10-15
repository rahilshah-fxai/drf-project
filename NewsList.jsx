import React from 'react';

const newsData = [
    { title: "Ares closing in on Dolphins deal at $8.1bn valuation", date: "Oct 03, 2024", time: "08:11 AM" },
    { title: "Summit raises $9.5bn for twelfth US growth equity fund", date: "Oct 03, 2024", time: "08:06 AM" },
    { title: "Turnspire acquires outdoor living and heating specialist GHP Group", date: "Oct 02, 2024", time: "03:02 PM" },
    { title: "MSIM closes 1QT climate PE fund at $750m", date: "Oct 02, 2024", time: "01:09 PM" },
    { title: "Coller Capital launches new private credit secondaries SICAV fund for wealth investors", date: "Oct 02, 2024", time: "12:08 PM" },
    { title: "Renovus sells marketing specialist LeapPoint to Omnicom", date: "Oct 02, 2024", time: "11:34 AM" },
    { title: "Jolt Capital appoints first Operating Partner in Asia", date: "Oct 02, 2024", time: "11:03 AM" },
    { title: "Apollo looking to double assets by 2029", date```javascript
    { title: "Apollo looking to double assets by 2029", date: "Oct 02, 2024", time: "08:47 AM" },
    { title: "European PE fundraising hits record pace in H1", date: "Oct 02, 2024", time: "08:43 AM" },
    { title: "CVC-led consortium expands lender group for £5.4bn Hargreaves Lansdown takeover", date: "Oct 01, 2024", time: "02:04 PM" }
];

const NewsList = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h2>Latest PE Markets Deals / News</h2>
            <ul>
                {newsData.map((news, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <strong>{news.title}</strong><br />
                        <span>{news.date}, {news.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
```