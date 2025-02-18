import PropTypes from 'prop-types';

export default function Dropdown({ text, setValue, value }) {
    function handleSelect(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <label className="block text-gray-600 font-medium">{text}</label>
            <select
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={handleSelect}
                value={value}
            >
                <option value="0">None</option>
                <option value="5">Swiggy (5%)</option>
                <option value="10">Zomato (10%)</option>
                <option value="6">Blinkit (6%)</option>
                <option value="8">Amazon (8%)</option>
                <option value="4">Flipkart (4%)</option>
            </select>
        </div>
    );
}
Dropdown.propTypes = {
    text: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
