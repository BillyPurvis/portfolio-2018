import { toggleMenu } from '../state-functions'

test('Returns the opposite of the passed boolean value', () => {
    const state = {
        menuActive: false
    }

    const finState = toggleMenu(state)
    
    expect(finState).toEqual(true)    
})