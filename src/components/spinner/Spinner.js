import './spinner.css';

const Spinner = () =>{
    return (
      <div className="spinner-container">
        <div className="spinner">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  export default Spinner;

