import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import About from './About';
import CompetitionDisplay from './CompetitionDisplay';
import CompetitionForm from './CompetitionForm';
import CompetitionSummary from './CompetitionSummary';
import Header from './Header';
import MainFeed from './MainFeed';
import StartBookForm from './PostBookProgressForm';
import PostBookProgressForm from './PostBookProgressForm';
import PostCard from './PostCard';
expect.extend(toHaveNoViolations);

describe('Header', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<Header/>);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

// describe('CompetitionDisplay', () => {
// 	it('should not have any accessibility issues', async () => {
        
// 		const { container } = render(<CompetitionDisplay/>);
// 		const results = await axe(container);
// 		expect(results).toHaveNoViolations(); 
// 	});
// });

describe('PostCard', () => {
	it('should not have any accessibility issues', async () => {
        const fakePost = {
            memberName: "Joey",
            typeofPost: "logProgress",
            book: {isbn_13:["978"], title:"A Good Book", number_of_pages:5},
            pagesRead:2,
            currentPage: 2
        }
		const { container } = render(<PostCard post={fakePost}/>);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

describe('PostBookProgressForm', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<PostBookProgressForm />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

describe('StartBookForm', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<StartBookForm />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

describe('CompetitionSummary', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(
			<BrowserRouter>
				<CompetitionSummary />
			</BrowserRouter>);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

describe('MainFeed', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(
			<BrowserRouter>
				<MainFeed />
			</BrowserRouter>);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

describe('Competition Form', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<CompetitionForm />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

describe('About', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<About />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});

