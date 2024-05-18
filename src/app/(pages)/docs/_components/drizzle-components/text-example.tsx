import { getMyTexts } from "@/server/queries"

export const dynamic = "force-dynamic"

export default async function TextExample() {
  const texts = await getMyTexts()

  return (
    <div>
      <table className="table-auto border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Text ID</th>
            <th className="border px-4 py-2">Text Content</th>
          </tr>
        </thead>
        <tbody>
          {texts.map((text) => (
            <tr key={text.id}>
              <td className="border px-4 py-2">{text.id}</td>
              <td className="border px-4 py-2">{text.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
