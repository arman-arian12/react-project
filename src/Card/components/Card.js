
const head = " React-app";
const ttleDec = `i am front End Web Developer. i'm still learn 
new langague and new think. i's halp me a
dedicated web developer.I have a passion for learning 
and sharing my knowledge with other as possible`;
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();



function Card (){
    
    return <div className='card'>
    <h2 className='cardTitle'>{head}</h2> 
    <p className='cardDec'> {ttleDec}</p>
    <p className='cardfooter'>{year+"/" + day +"/" + month}</p>
    
</div>
    
}

export default Card