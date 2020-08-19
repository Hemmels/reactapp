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
	margin-bottom: .2rem;
	font-family: 'Mulish';
	font-size: 2em;
	font-weight: 500;
`

// Homepage styles
export const Logo = styled.img`
	margin: 1em;
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
	width: 40%;
	border-width:5px;  
	border-style:groove;
	margin: 0 auto;
`

export const MyFormGroup = styled.div`
	margin: 1em; 
	max-width: 95%;
`
export const AdminLabel = styled.label`
	color: #647eed;
	vertical-align: middle;
	width: 40%;
	text-align: left;
	font-weight: 500;
	margin-bottom: 0;
	display: flex;
    align-items: center;
`

export const MyFormControl = styled.input`
	max-width: 120px;
`

export const MyFormBtn = styled.button`
	min-width: 80px;
	width: 15%;
`