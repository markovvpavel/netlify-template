import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { AppState, restoreApp } from "@/features/appSlice";

export const usePersistRedux = () => {
  const LOCAL_STORAGE_KEY = `netlify-template-state`;

  const sliceApp = useAppSelector((s) => s.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!storedState) return;

    const parsedState: AppState = JSON.parse(storedState);

    if (!parsedState) return;

    dispatch(restoreApp(parsedState));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sliceApp));
  }, [sliceApp]);
};
