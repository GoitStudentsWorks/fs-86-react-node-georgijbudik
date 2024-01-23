import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import dayjs from 'dayjs';

import BasicModalWindow from 'components/BasicModalWindow';
import Button from 'components/Button';
import { addProduct } from '../../../redux/products/productOperations';
import {
  selectProductToAdd,
  setCaloriesByUser,
  setProductToAdd,
} from '../../../redux/products/productSlice';
import {
  StyledBtnContainer,
  StyledForm,
  StyledGramsContainer,
  StyledGramsInput,
  StyledInputContainer,
  StyledNameInput,
  StyledTextAmount,
  StyledTextCalories,
  StyledTextGrams,
} from './AddProductForm.styled';

const AddProductForm = () => {
  const [grams, setGrams] = useState(null);
  const [hasGramsInputFocus, setHasGramsInputFocus] = useState(false);

  const dispatch = useDispatch();

  const productToAdd = useSelector(selectProductToAdd);

  const handleChangeGrams = ({ target: { value } }) => {
    setGrams(Number(value));
  };

  const caloriesByUsersGrams = Math.round(
    (productToAdd.calories * grams) / 100
  );

  const date = dayjs();
  const formattedDate = dayjs(date).format('DD.MM.YYYY');

  const productToAddToDiary = {
    productId: productToAdd._id,
    date: formattedDate,
    weight: grams,
  };

  const handleAddToDiaryBtn = e => {
    e.preventDefault();
    dispatch(addProduct(productToAddToDiary));
    dispatch(setCaloriesByUser(caloriesByUsersGrams));
  };

  const handleCloseAddModal = () => {
    dispatch(setProductToAdd(null));
  };

  return (
    <BasicModalWindow onClose={handleCloseAddModal}>
      <StyledForm onSubmit={handleAddToDiaryBtn}>
        <StyledInputContainer>
          <label>
            <StyledNameInput
              type="text"
              defaultValue={
                productToAdd.title[0].toUpperCase() +
                productToAdd.title.slice(1)
              }
              readOnly
            />
          </label>
          <StyledGramsContainer  $hasFocus={hasGramsInputFocus}>
          <label>
            <StyledGramsInput
              type="number"
              onChange={handleChangeGrams}
              required
              onFocus={() => setHasGramsInputFocus(true)}
              onBlur={() => setHasGramsInputFocus(false)}
            />
          </label>
          <StyledTextGrams>grams</StyledTextGrams></StyledGramsContainer>
        </StyledInputContainer>
        <StyledTextCalories>
          Calories:  
          <StyledTextAmount>
            {!grams ? 0 : caloriesByUsersGrams}
          </StyledTextAmount>
        </StyledTextCalories>
        <StyledBtnContainer>
          <Button type="submit" paddingY={12} paddingX={29} fontSize={16}>
            Add to diary
          </Button>
          <Button
            type="button"
            paddingY={12}
            paddingX={36}
            fontSize={16}
            secondary
            onClick={handleCloseAddModal}
          >
            Cancel
          </Button>
        </StyledBtnContainer>
      </StyledForm>
    </BasicModalWindow>
  );
};

export default AddProductForm;
