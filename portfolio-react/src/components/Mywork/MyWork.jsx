import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import myworkData from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="mywork-container">
        {
        myworkData.map((data, index) => {
          return <img key={index} src={data.w_img} alt="MyworkImage" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="icon" />
      </div>
    </div>
  )
}

export default MyWork
