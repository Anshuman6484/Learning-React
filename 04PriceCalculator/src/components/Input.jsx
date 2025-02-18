import PropTypes from 'prop-types';

export default function Input({ text, placeholder, setValue, value, setIsCalculate }) {
    function handleChange(e) {
        setValue(e.target.value);
        setIsCalculate(false);
    }

    return (
        <div>
            <label className="block text-gray-600 font-medium">{text}</label>
            <input
                type="number"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                placeholder={placeholder}
                onChange={handleChange}
                value={value} />
        </div>
    );
}
Input.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    setIsCalculate: PropTypes.func.isRequired,
};
