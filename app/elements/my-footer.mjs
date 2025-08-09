export default function Footer ({ html, state }) {
	let date = new Date().getFullYear()
  
   
	return html`
	<footer class="text-center">
	  <div class="">
		<p class="">© ${date} Hosea Industries</p>
	  </div>
	</footer>`
  }
  