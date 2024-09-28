const Bell = props => (
    <svg width="16" height="20" viewBox="0 0 16 20" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00013 1C3.79502 1 1.96793 4.78623 1.96793 7.28913C1.96793 9.15979 2.24069 8.60928 1.19935 10.8913C-0.0723022 14.1431 5.04138 15.4723 8.00013 15.4723C10.958 15.4723 16.0717 14.1431 14.8009 10.8913C13.7596 8.60928 14.0323 9.15979 14.0323 7.28913C14.0323 4.78623 12.2043 1 8.00013 1Z" stroke="currentColor" fill={props.color || 'none'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.1908 17.9714C8.9634 19.3347 7.0487 19.3509 5.80957 17.9714" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default Bell;