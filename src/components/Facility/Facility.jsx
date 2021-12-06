import './facility.scss'
import FacilityItem from './FacilityItem'

const Facility = () => {
  const data = [
    {
      name: 'FREE SHIPPING WORLD WIDE',
      icon: 'fas fa-plane'
    },

    {
      name: '100% MONEY BACK GUARANTEE',
      icon: 'fas fa-money-check-alt'
    },
    {
      name: 'MANY PAYMENT GATEWAYS',
      icon: 'far fa-credit-card'
    },
    {
      name: '24/7 ONLINE SUPPORT',
      icon: 'fas fa-headset'
    }
  ]
  return (
    <div className="facility">
      <div className="grid">
        <div className="row">
          {data.map(item => (
            <FacilityItem key={item.name} name={item.name} icon ={item.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Facility
