import { TaskType } from "../../Types/TaskTypes"

type Props = {
  task: TaskType
}

export default function Todo({ task }: Props) {
  const { completed, name } = task
  return <div>{name}</div>
}
