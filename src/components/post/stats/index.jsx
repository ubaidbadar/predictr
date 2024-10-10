import React from 'react';
import ArrowMovement from './arrow';
import Movement from './movement';
import dayjs from 'dayjs';


const transformDate = date => dayjs(date).format('DD MMM, h:mm A')

const Item = ({ title, value, subtitle }) => (
    <div>
        <small className="text-gray-0 text-xs">{title}</small>
        <h6 className='text-md font-bold'>{value}</h6>
        {subtitle && <small className='smaller'>{subtitle}</small>}
    </div>
)

const Stats = ({ current_stock_price, stock_price_when_guessed, guess_date, estimated_direction, actual_direction, guess_accuracy, actual_change, last_updated, createdOn, points, allowed }) => {
    return (
        <div>
            <div className='grid grid-cols-3 px-5 py-4 gap-4'>
                <Item title="Price When Guessed"
                    value={`$${stock_price_when_guessed?.toFixed(2)} USD`}
                    subtitle={transformDate(createdOn)}
                />
                <Item title="Last Updated Price"
                    subtitle={(current_stock_price && last_updated !== undefined) ? transformDate(last_updated) : '-'}
                    value={current_stock_price ? `$${current_stock_price.toFixed(2)} USD` : '-'}
                />
                <Item title="Movement"
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
