import './Title.css'

function Title(props){
    return (
        <div className='title__container'>
            <h1 className='title__logo'>CAPITANA</h1>
            <h3 className='title__greeting'>{props.greeting}</h3>
        </div>
    );
}

export default Title;