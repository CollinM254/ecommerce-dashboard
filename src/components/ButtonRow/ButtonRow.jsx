import { useContext, React } from 'react';
import { BlogContext } from '../../logic/context/BlogContext';
import { ShopContext } from '../../logic/context/ShopContext';
import StyledRow from './ButtonRow-styles';

function ButtonRow({ contextToRender }) {
  const context = useContext(contextToRender);

  // Creating the page numbered buttons for current state
  const renderButtons = [];
  for (let i = 1; i <= context.currentState.pageQty; i++) {
    renderButtons.push(
      <button
        key={i}
        id={`button${i}`}
        className={i === context.currentState.currentPageIndex ? 'active' : 'idle'}
        onClick={() => {
          context.updatePage(i);
        }}
      >
        {i}
      </button>,
    );
  }

  const isPrevDisabled = context.currentState.currentPageIndex === 1;
  const isNextDisabled = context.currentState.currentPageIndex === context.currentState.pageQty;

  return (
    <StyledRow>
      <button
        className={`idle prev ${isPrevDisabled && 'disabled'}`}
        id="button0"
        onClick={() => {
          context.updatePageAlt('prev');
        }}
      >
        Previous
      </button>

      {renderButtons}

      <button
        className={`idle next ${isNextDisabled && 'disabled'}`}
        id={`${context.currentState.pageQty + 1}`}
        onClick={() => {
          context.updatePageAlt('next');
        }}
      >
        Next
      </button>
    </StyledRow>
  );
}

export default ButtonRow;
