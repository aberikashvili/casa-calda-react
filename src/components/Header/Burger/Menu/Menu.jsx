import './menu.scss'

export default function Menu() {
    const handleItemClick = (e) => {
        e.stopPropagation();
      };
    return(
        <div className='body' onClick={handleItemClick}>
            <ul className="Menu-items">
                <li>მთავარი გვერდი</li>
                <li>ჩვენ შესახებ</li>
                <li>პარტნიორები</li>
                <li>პროექტები</li>
                <li>საქმიანობა</li>
                <li>თანამშრომლები</li>
            </ul>
            <button className='Orange'>დაგვიკავშირდით</button>
        </div>
    )
}