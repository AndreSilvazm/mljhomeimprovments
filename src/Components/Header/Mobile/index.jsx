import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";



function index(props) {
    return (
        <div>

            <i class=" text-2xl text-[#46853f]" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">

                <FiAlignJustify />

            </i>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <i type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

                        <IoCloseSharp />

                    </i>
                </div>

                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>

        </div>
    );
}

export default index;