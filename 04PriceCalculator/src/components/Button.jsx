import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Button({ text, bg, onHandleClick }) {
    return (
        <button
            className={clsx(
                'px-4 py-3 text-white font-semibold cursor-pointer rounded-lg transition',
                bg === 'blue' && 'bg-blue-500 hover:bg-blue-800',
                bg === 'gray' && 'bg-gray-500 hover:bg-gray-800'
            )}
            onClick={onHandleClick}
        >
            {text}
        </button>
    );
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    onHandleClick: PropTypes.func.isRequired,
};
