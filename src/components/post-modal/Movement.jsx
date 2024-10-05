import BoxField from '../../ui/boxfield';
import InputField from '../../ui/input';
import Model from '../../ui/modal/modal';

const Movement = ({ onChange, form, back, getTitle }) => {
    const perc = form.estimated_change_percent;
    const getProps = value => ({
        value,
        onChange,
        label: value,
        checked: form.estimated_direction === value,
        name: 'estimated_direction'
    });
    return (
        <Model
            className='no-animation'
            close={back}
            actions={() => (
                <button onClick={back}
                    className='btn btn-primary'
                    disabled={perc < 1 || perc > 100}
                >
                    Done
                </button>
            )
            }
            title={getTitle('Stock movement')}
        >
            <div>
                <p className="mt-0 mb-3 text-accent-4">Trend</p>
                <div className='d-flex gap-4'>
                    <BoxField {...getProps('Up')} />
                    <BoxField {...getProps('Down')} />
                </div>
            </div>
            <InputField type='number' min={1} max={100} name='estimated_change_percent' label='Percentage (%)' onChange={onChange} value={form.estimated_change_percent} />
        </Model>
    )
}

export default Movement;