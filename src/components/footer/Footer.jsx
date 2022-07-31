import React from 'react'
import { FacebookIcon, InstagramIcon, TelegramIcon } from '../../media/icons'
import { StyledFooter } from './styled'

const Footer = () => {
	return(
		<StyledFooter>
			<div className='contactsBlock'>
				<h3 className='contactText'>Contact us</h3>
				<div className='socialNetworksIcons'>
					<a
						className='icon'
						href='https://www.instagram.com/shevchenkowladimir/?igshid=1flbsgtl6m2ox'
					>
						<InstagramIcon />
					</a>
					<a
						className='icon'
						href='https://t.me/pustota_123'
					>
						<TelegramIcon />
					</a>
					<a
						className='icon'
						href='https://m.facebook.com/wladimir.shevchenko95'
					>
						<FacebookIcon />
					</a>
				</div>
			</div>
			<div className='rightsBlock'>
				<h4>
					© 2022 Volodymyr Shevchenko. All rights reserved.
				</h4>
			</div>
		</StyledFooter>
	)
}

export default Footer
