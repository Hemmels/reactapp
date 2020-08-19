import styled from 'styled-components'

// Page styles
export const Header = styled.div`
	line-height: 15px;
    vertical-align: middle;
	text-align: center;
`
export const Title = styled.h1`
	width: 95%;
	display: inline-block;
	color: cornflowerblue;
	margin-top: 0.5em;
	margin-bottom: .2rem;
	font-family: 'Mulish';
	font-size: 2em;
	font-weight: 500;
`

// Homepage styles
export const Logo = styled.img`
	margin: 1em;
	margin-bottom: 0;
	max-width: 4em;
    vertical-align: middle;
`
	
export const Sub = styled.h3`
	display: inline-block;
	color: #647eed;
	font-family: 'Mulish';
	margin: 0em;
`

// Panel styles
export const AdminPanelStyle = styled.form`
	background-color: pink;
	width: 36%;
	border-width:5px;  
	border-style:groove;
	margin: 0 auto;
`

export const MyFormGroup = styled.div`
	margin: 1em; 
	width: auto;
`
export const AdminLabel = styled.label`
	color: #647eed;
	vertical-align: middle;
	min-width: 40%;
	width: 70%;
	text-align: left;
	font-weight: 500;
	margin-bottom: 0;
	display: flex;
    align-items: center;
`

export const MyFormControl = styled.input`
	box-sizing : border-box;
	min-width: 120px;
	max-width: 444px;
	width: 85%;
`

export const MyFormBtn = styled.button`
	box-sizing : border-box;
	min-width: 80px;
	width: 15%;
`