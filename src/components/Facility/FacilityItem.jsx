

const FacilityItem = ({ name, icon }) => {
  return (
    <div className="col l-3 m-6 c-12">
      <div className="facility__item">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default FacilityItem
