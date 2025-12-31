
export interface ReplyOption {
  text: string;
  explanation: string;
}

export interface GenerationResult {
  replies: ReplyOption[];
}

export interface UserInput {
  receivedMessage: string;
  context: string;
}
