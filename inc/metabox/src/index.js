import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";

const astraIcon = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" space="preserve">
	<linearGradient gradientUnits="userSpaceOnUse" x1="514.4975" y1="-404.01" x2="569.5025" y2="-383.9898" gradientTransform="matrix(1 0 0 -1 -512 -364)">
	</linearGradient>
	<path d="M30,0.74C13.84,0.74,0.74,13.84,0.74,30c0,16.16,13.1,29.26,29.26,29.26c16.16,0,29.26-13.1,29.26-29.26 C59.26,13.84,46.16,0.74,30,0.74z M21.15,45.1c-2.13,0-4.25,0-6.37,0c4.95-10.46,9.91-20.92,14.86-31.38c0,0,0,0,0,0l3.54,7.08 C29.17,28.9,25.16,37,21.15,45.1z M38.37,45.1c-0.78-1.81-1.57-3.62-2.35-5.43c-1.97,0-3.93,0-5.9,0H30l0.12-0.24 c2.04-4.25,4.09-8.5,6.14-12.74c2.98,6.13,5.97,12.27,8.97,18.41C42.94,45.1,40.66,45.1,38.37,45.1z"/>
</svg>;

registerPlugin( 'astra-metabox-sidebar', {
	icon: astraIcon,
	render: () => {
	  return (
		<>
		  <PluginSidebar
			title={ __( 'Astra Settings', 'astra' ) }
		  >
			Meta Content goes here...
		  </PluginSidebar>
		</>
	  )
	}
})
