import React from 'react';
import './table.css'


export default function Table (props) {
    
    const isResetActive = !(props.idChecked && props.nameChecked && props.yearChecked && props.colorChecked && props.valueChecked);

    return (
        <div className="table">
            <div className="table__header">
                <h1>Pantone colors</h1>
                <div className={`table__reset ${isResetActive ? "active" : null}`} onClick={() => props.resetCheckboxes()}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 1.17C13.3244 1.17 16.83 4.67561 16.83 9C16.83 13.3244 13.3244 16.83 9 16.83V18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C5.64428 0 2.71752 1.83656 1.17 4.55937C0.936352 4.97046 0.734144 5.40177 0.566648 5.85L1.72363 6.10242C1.88368 5.70084 2.07602 5.31564 2.29743 4.95C3.66943 2.68426 6.15788 1.17 9 1.17Z" fill="#888888"/>
                        <path d="M9 16.83V18C6.26811 18 3.8205 16.7828 2.16993 14.8611L3 14.0311C4.43633 15.7422 6.59113 16.83 9 16.83Z" fill="#888888"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.17 5.13H5.13H6.3V6.3H2.86102e-06V0H1.17V1.17V5.13Z" fill="#888888"/>
                    </svg>
                    <p>Reset</p>
                </div>
            </div>
            <table className="table__content">
                <thead>
                    <tr>
                        {props.idChecked ? <th className="id"><input type="checkbox" checked={props.idChecked} onChange={() => props.toggleCheckBox(1)}/>ID</th> : null}
                        {props.nameChecked ? <th className="name"><input type="checkbox" checked={props.nameChecked} onChange={() => props.toggleCheckBox(2)}/>NAME</th> : null}
                        {props.yearChecked ? <th className="year"><input type="checkbox" checked={props.yearChecked} onChange={() => props.toggleCheckBox(3)}/>YEAR</th> : null}
                        {props.colorChecked ? <th className="color"><input type="checkbox" checked={props.colorChecked} onChange={() => props.toggleCheckBox(4)}/>COLOR</th> : null}
                        {props.valueChecked ? <th className="value"><input type="checkbox" checked={props.valueChecked} onChange={() => props.toggleCheckBox(5)}/>PANTONE VALUE</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {props.colors.map(item => (
                        <tr key={item.id}>
                            {props.idChecked ? <td className="id">{item.id}</td> : null}
                            {props.nameChecked ? <td>{item.name}</td> : null}
                            {props.yearChecked ? <td>{item.year}</td> : null}
                            {props.colorChecked ? <td><span className="color-box" style={{backgroundColor: item.color}}></span>{item.color}</td> : null}
                            {props.valueChecked ? <td>{item.pantone_value}</td> : null}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
    
}
