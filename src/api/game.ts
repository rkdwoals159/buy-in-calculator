import { addBuyinType, BuyinType } from "../pages/game/Mypage";
import axiosInstance from "./axiosInstance";

export const createGame = async (id: string) => {
    const response = await axiosInstance.post('/games', { id });
    return response.data;
};

export const addBuyin = async (gameId: string, userId: number, amount: number,bindCount : number) => {
    const response = await axiosInstance.post(`/games/${gameId}/buyins`, { userId, amount,bindCount });
    return response.data;
};

export const getBuyins = async (gameId: string) => {
    const response = await axiosInstance.get(`/games/${gameId}/buyins`);
    return response.data as BuyinType[];
};

export const settleGame = async (gameId: string, amount: number) => {
    const response = await axiosInstance.patch(`/games/${gameId}/settle/${amount}`);
    return response.data as addBuyinType;
};
export const getGameParticipants = async (gameId: string) => {
    const response = await axiosInstance.get(`/games/${gameId}/participants`);
    return response.data;
};
export const postBuyin = async (userId: number, amount: number) => {
    const response = await axiosInstance.post('/games/buyin', { userId, amount });
    return response.data;
  };