import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
    articles =  [
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Mat Smith",
        "title": "The Morning After: A Japanese restaurant combats 'sushi terrorism' with AI cameras",
        "description": "Many people in Japan have been outraged by a recent trend dubbed \"sushi terrorism.\" Videos across social media show people carrying out all kinds of unhygienic acts, like licking the spoon for a container of green tea powder. Another video, which has more tha…",
        "url": "https://www.engadget.com/the-morning-after-a-japanese-restaurant-combats-sushi-terrorism-with-ai-cameras-121542434.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-02/1ffa7a30-ab91-11ed-bfff-f3704ee0bfa1",
        "publishedAt": "2023-02-13T12:15:42Z",
        "content": "Many people in Japan have been outraged by a recent trend dubbed \"sushi terrorism.\" Videos across social media show people carrying out all kinds of unhygienic acts, like licking the spoon for a cont… [+3237 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Florence Ion",
        "title": "Hacked iPhone 12 Mini Has Ports For USB-C and Lightning",
        "description": "We’re all waiting for Apple to bring USB-C to the iPhone. But wouldn’t it be neat to be able to put all those old lightning cables to use even after the company switches to USB-C?Read more...",
        "url": "https://gizmodo.com/iphone-12-mini-usb-c-lightning-ports-hack-apple-chargin-1850109652",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4ae60977abca4c4a6f48ad237bec495c.png",
        "publishedAt": "2023-02-13T21:45:00Z",
        "content": "Were all waiting for Apple to bring USB-C to the iPhone. But wouldnt it be neat to be able to put all those old lightning cables to use even after the company switches to USB-C?\r\nOne YouTuber is gett… [+2122 chars]"
        },
        {
        "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
        },
        "author": "Jonathan M. Gitlin",
        "title": "The Volvo XC60 Recharge benefits from bigger hybrid battery",
        "description": "The midlife refresh boosted battery capacity; shame it charges so slowly.",
        "url": "https://arstechnica.com/cars/2023/02/the-volvo-xc60-recharge-benefits-from-bigger-hybrid-battery/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/02/2023-Volvo-XC60-1-760x380.jpg",
        "publishedAt": "2023-02-13T18:35:45Z",
        "content": "Enlarge/ The styling changes to the Volvo XC60 as part of its midlife refresh are much more subtle than the engineering changes.\r\n8 with \r\nBack in 2018 we tested the Volvo XC60 plug-in hybrid, Sweden… [+5689 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "michael.hicks@futurenet.com (Michael L Hicks)",
        "title": "Google Pay vs. Samsung Pay vs. Meta Pay vs. Amazon Pay vs. Apple Pay",
        "description": "Each service claims to simplify your digital (or in-person) payments, but deciding which payment app or platform to use is more complicated.",
        "url": "https://www.androidcentral.com/apps-software/meta-pay-vs-amazon-pay-vs-google-pay-vs-samsung-pay",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/MqR97nhWDLouM2SmndZgF3-1200-80.jpg",
        "publishedAt": "2023-02-13T15:31:24Z",
        "content": "Going to a website, entering and saving your credit card info, and buying a product is so old-fashioned — or so companies like Google and Apple would like you to think. \r\nServices like Meta Pay or Am… [+11379 chars]"
        }
        ]
    

    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
                articles: this.articles,
                loading: false
        }
   }


    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://i0.wp.com/technode.com/wp-content/uploads/2021/08/technode-news-feed-1-1.png?fit=540%2C540&ssl=1" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                   
                   
                    
                </div>
                         
            </div>
        )
    }
}

export default News
    