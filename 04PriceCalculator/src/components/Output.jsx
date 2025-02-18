import PropTypes from 'prop-types';

export default function Output({ text, value }) {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    return (
        <div className="mt-6 text-center text-lg font-semibold text-gray-800">
            {text} : <span className="text-teal-600">{formattedValue}</span>
        </div>
    );
}
Output.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
