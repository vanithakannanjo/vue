import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('BooBoo Car')
    expect(companyName).toBeInTheDocument()
    //screen.debug()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
    const navMenuItems = screen.getAllByRole('listitem')
    console.log(navMenuItems)

    const navMenuText = navMenuItems.map((item) => item.textContent)
    console.log(navMenuText)

    expect(navMenuText).toEqual(['Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Jobs'])
  })
})
