import type {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import type {FilmState} from "../slice.ts";
import {fetchStaffByFilmId} from "../../services/fetchStaffByFilmId.ts";

export const staffBuilder = (builder: ActionReducerMapBuilder<FilmState>) => {
    builder
        .addCase(fetchStaffByFilmId.pending, (state) => {
            state.isLoadingStaff = true;
        })
        .addCase(fetchStaffByFilmId.fulfilled, (state, action) => {
            state.staff = action.payload;
            state.isLoadingStaff = false;
        })
        .addCase(fetchStaffByFilmId.rejected, (state, action) => {
            state.isLoadingStaff = false;
            state.error = action.error.message || 'Не удалось загрузить список актеров';
        })
};