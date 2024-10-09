import React from 'react';
import ArrowMovement from '../ArrowMovement/ArrowMovement';
import moment from 'moment/moment';
import Movement from '../Movement/Movement';


const transformDate = date => moment(date).local().format('MMM DD, hh:mm A')

const Item = ({ title, value, subtitle, className = 'flex-2' }) => (
    <div className={className}>
        <small className="smaller xs-small text-accent-4">{title}</small>
        <h6 className={`my-1 subtitle fs-normal-sm text-normal ${className}`}>{value}</h6>
        {subtitle && <small className='smaller'>{subtitle}</small>}
    </div>
)

const Stats = ({ current_stock_price, stock_price_when_guessed, guess_date, estimated_direction, actual_direction, guess_accuracy, actual_change, last_updated, createdOn, points, allowed }) => {
    return (
        <div className='border border-radius-8 overflow-hidden w-100'>
            <div className='d-flex px-3 py-2 mb-1 gap-2'>
                <Item title="Price When Guessed"
                    value={`$${stock_price_when_guessed?.toFixed(2)} USD`}
                    subtitle={transformDate(createdOn)}
                />
                <Item title="Last Updated Price"
                    subtitle={(current_stock_price && last_updated !== undefined) ? transformDate(last_updated) : '-'}
                    value={current_stock_price ? `$${current_stock_price.toFixed(2)} USD` : '-'}
                />
                <Item title="Movement"
                    className='flex-2-sm'
                    value={current_stock_price ? (
                        <ArrowMovement
                            accurate={estimated_direction === actual_direction}
                            movement={actual_direction}
                            percentage={actual_change?.toFixed(2)}
                        />
                    ) : '-'}
                />
            </div>
            {allowed && current_stock_price && <Movement guess_date={guess_date} points={points} actual_change={actual_change} accurate={estimated_direction === actual_direction} movement={actual_direction} percentage={guess_accuracy?.toFixed(2)} />}
        </div>
    )
}

export default Stats
