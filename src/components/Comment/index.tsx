import { ThumbsUp, Trash } from "phosphor-react"
import Avatar from "../Avatar"

function Comment() {
  return (
    <div className="flex flex-1 items-start gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&h=56&q=80"
        alt="Profile picture - Lesli Alexander"
        hasBorder={false}
      />
      <div className="flex w-full flex-col gap-4">
        <div className="w-full rounded-md bg-gray-3 p-4">
          <div className="flex justify-between">
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-1">
                <strong className="text-base font-bold text-white">
                  Leslie Alexander
                </strong>
                <span className="text-[0.875rem] font-bold text-gray-5">
                  (você)
                </span>
              </div>
              <time
                title="19 de Setembro às 18:00h"
                dateTime="2022-09-19 18:00:00"
                className="text-[0.875rem] text-gray-5"
              >
                Cerca de 2h
              </time>
            </div>
            <button
              type="button"
              className="h-6 w-6 text-gray-5 transition-colors hover:text-red"
              aria-label="Delete"
            >
              <Trash size={20} />
            </button>
          </div>
          <p className="pt-4 text-gray-6">Muito bom, Jane!! Parabéns.</p>
        </div>
        <div className="flex flex-col justify-start">
          <button
            type="button"
            className="flex w-fit items-center justify-center gap-2.5 font-bold text-gray-5 transition-colors hover:text-green-light"
          >
            <ThumbsUp size={20} />
            <span>Aplaudir • 03</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comment
