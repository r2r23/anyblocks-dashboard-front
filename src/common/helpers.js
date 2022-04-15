// const crypto = require('crypto')

export const currencySign = currency => {
    switch (currency) {
        case 'USD': return '$'
        case 'EUR': return '€'
        case 'GBP': return '£'
        case 'JPY': return '¥'
        case 'RUB': return '₽'
        case 'ILS': return '₪'
        case 'AUD': return '₳'
        case 'THB': return '฿'
        case 'BTC': return '₿'
        case 'CNY': return '元'
        case 'YNP': return '¥'
        default: return currency+' '
    }
}

export const orderTypeString = type => {
    switch (type) {
        case 0: return 'Buy'
        case 1: return 'Sell'
        case 2: return 'Buy Limit'
        case 3: return 'Sell Limit'
        case 4: return 'Buy Stop'
        case 5: return 'Sell Stop'
        default: return ''
    }
}

export const timeToString = time => {
    let stamp = time,
        date = new Date(stamp)

    return ('00' + date.getUTCDate()).slice(-2) + '.' +
        ('00' + (date.getUTCMonth()+1)).slice(-2) + '.' +
        date.getUTCFullYear() + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2)
}

export const nsOpenLink = url => {
    window.nsWebViewBridge.emit('link', url)
}

export const strToColor = str => {
    if (!str) {
        return '#000000'
    }

    str = crypto.createHash('sha256').update(String(str)).digest('hex').slice(0,6)

    let c1 = Math.max(0, parseInt(str.slice(0,2), 16) - 32),
        c2 = Math.max(0, parseInt(str.slice(2,4), 16) - 32),
        c3 = Math.max(0, parseInt(str.slice(4,6), 16) - 32)

    return 'rgb('+c1+', '+c2+', '+c3+')'
}

export const timeToPeriod = time => {
    if (time < 90) {
        return time+' sec'
    }

    if (time < 90 * 60) {
        return Math.floor(time / 60)+' min'
    }

    if (time < 3600 * 96) {
        return Math.floor(time / 3600)+' hr'
    }

    return Math.floor(time / 86400)+' days'
}

export const checkSession = session => {
    let date = new Date(),
        d = date.getUTCDay(),
        h = date.getUTCHours(),
        m = date.getUTCMinutes(),
        s = session[d][h],
        prev = h > 0 ? session[d][h-1] : (d > 0 ? session[d-1][23] : session[6][23])

    return (s === 0 || s === 1) ? !!s : (s * 60 < m ? prev : !!prev)
}

export const errorToText = err => {
    switch (err) {
        case 'NOT_FOUND':
            return 'Request error'
        case 'FORBIDDEN':
            return 'Access denied. Please re-login'
        case 'SERVER_ERROR':
            return 'Action failed. Please try again later'
        case 'INVALID_ACCOUNT':
            return 'Session expired. Please re-login'
        case 'INVALID_EMAIL':
            return 'Invalid e-mail address';
        case 'INVALID_PHONE':
            return 'Invalid phone number';
        case 'INVALID_COUNTRY':
            return 'Invalid country';
        case 'INVALID_LOGIN':
            return 'Invalid login credentials';
        case 'USER_BLOCKED':
            return 'Account is blocked. Please contact support';
        case 'USER_REGISTERED':
            return 'User with entered e-mail or phone is already registered';
        case 'INVALID_USER':
            return 'User is not found'
        case 'REJECTED':
            return 'Operation is not allowed due to platform restrictions';
        case 'INVALID_OLD_PASSWORD':
            return 'Old password is invalid';
        case 'INVALID_SYMBOL':
            return 'Invalid trading symbol';
        case 'INVALID_SYMBOL_PRECISION':
            return 'Invalid symbol precision';
        case 'INVALID_FRAME':
            return 'Invalid chart frame';
        case 'INVALID_CURRENCY':
            return 'Invalid currency';
        case 'INVALID_PRODUCT':
            return 'Invalid account trading type';
        case 'INSUFFICIENT_FUNDS':
            return 'Insufficient funds';
        case 'INVALID_WITHDRAWAL':
            return 'Withdrawal is not found';
        case 'INVALID_STATUS':
            return 'Invalid status';
        case 'INVALID_FILE':
            return 'Invalid file extension or file is too large';
        case 'INVALID_DOCUMENT':
            return 'Document is not found';
        case 'INVALID_NAME':
            return 'Invalid name';
        case 'INVALID_LOT_SIZE':
            return 'Invalid lot size';
        case 'INVALID_LOT_STEP':
            return 'Invalid lot step';
        case 'INVALID_MIN_VOLUME':
            return 'Invalid minimal volume';
        case 'INVALID_MAX_VOLUME':
            return 'Invalid maximal volume';
        case 'INVALID_GROUP':
            return 'Invalid group';
        case 'INVALID_SPREAD':
            return 'Invalid spread';
        case 'REQUEST_TIMEOUT':
            return 'Request timed out. Please try again later';
        case 'INVALID_TYPE':
            return 'Invalid order type';
        case 'INVALID_VOLUME':
            return 'Invalid order volume';
        case 'INVALID_SL':
            return 'Invalid stop loss value';
        case 'INVALID_TP':
            return 'Invalid take profit value';
        case 'INVALID_PRICE':
            return 'Invalid order price';
        case 'INVALID_EXPIRATION':
            return 'Invalid order expiration';
        case 'NOT_ENOUGH_MARGIN':
            return 'Not enough margin';
        case 'INVALID_ORDER':
            return 'Order is not found';
        case 'MARKET_CLOSED':
            return 'Trading is not available. Please try again';
        case 'INVALID_BALANCE_TYPE':
            return 'Invalid type of balance operation';
        case 'INVALID_HASH':
            return 'Invalid hash';
        case 'HASH_EXPIRED':
            return 'Your password reset link is expired. Please request a new one';
        case 'INVALID_CODE':
            return 'Invalid 2FA code';
        default:
            return err
    }
}

export const copyToClipboard = text => {
    navigator.clipboard.writeText(text).then( () => {
        console.log('Async: Copying to clipboard was successful: '+text)
    }, err => {
        console.error('Async: Could not copy text: ', err)
    })
}

export const isMobile = () => {
    // return true
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}