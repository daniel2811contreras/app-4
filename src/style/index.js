import { style } from 'typestyle'
export const Color = {
    primary: '#171717',
    secon: '#DA0037',
}


export const bodyStyle = style({
    width: '100vw',
    maxWidth: '1024px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
})

export const inputStyle = style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '10px',

    $nest: {
        '& label': {
            fontWeight: 'bold',
            color: Color.primary,

            $nest: {
                '&.red': {
                    color: Color.secon
                }
            }
        }
    }
})