import Inferno from 'inferno';
import classnames from 'classnames';

export default function Message({ content, isSent, backgroundColor, color }) {
    const classes = {
        message: classnames({
            'message__body': true,
            'sent': isSent
        }),
    }

    const sentMesssageStyle = {
        backgroundColor,
        color
    };

    return (
        <li className={classes.message} style={isSent && sentMesssageStyle}>
            <span>{content}</span>
        </li>
    )
}