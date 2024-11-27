export interface MonitoredAccount {
    address: string;
    chatId: number;
    lastHealth: number;
    firstThreshold: boolean;
    secondThreshold: boolean;
}
