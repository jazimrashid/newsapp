import React  from 'react'

const NewsItem =(props)=> {
  
   
   let {title, description, imageUrl, newsUrl, author, date, source }=props
    return (
      <div>
       <div className="card" style={{width: "24rem"}}>
  <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2023/01/Gavel-1.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span></p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
  

    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem