import { useMemo } from "react";

export const DOTS = "...";

//simple python-like range function
const range = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = ({ total_count, page_size, current_page }) => {
  const pagination_range = useMemo(() => {
    
    const total_pages_no = Math.ceil(total_count / page_size);

    if (total_pages_no <= 5) {
      return range(1, total_pages_no);
    }

    const left_bound = Math.max(current_page, 1);
    const right_bound = Math.min(current_page, total_pages_no);

    const show_left_dots_condition = left_bound > 2;
    const show_right_dots_condition = right_bound < total_pages_no - 1;

    const first_page = 1
    const last_page = total_pages_no;

    //Case 1. Show only right dots
    if (!show_left_dots_condition && show_right_dots_condition) {

      if (current_page == first_page)
        return [first_page, DOTS, total_pages_no];

      return [first_page, current_page, DOTS, total_pages_no];
    }

    //Case 2. Show only left dots
    if (show_left_dots_condition && !show_right_dots_condition) {
      
      if (current_page == last_page)
        return [first_page, DOTS, last_page];
      
      return [first_page, DOTS, current_page, last_page];
    }

    //Case 3. Show both left and right dots
    if (show_left_dots_condition && show_right_dots_condition) {
      return [first_page, DOTS, current_page, DOTS, last_page];
    }

  }, [total_count, page_size, current_page]);

  return pagination_range;
};
