import {FC} from "react"


const Hamburger: FC<{openState: () => void, checked: boolean}> = ({openState, checked}) => {
    
    return (
        <div className="menu-icon" onClick={openState}>
		<input className="menu-icon__cheeckbox" type="checkbox" checked={checked}/>
		<div>
			<span></span>
			<span></span>
		</div>
	</div>
    )
}

export default Hamburger
