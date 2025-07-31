import { NextResponse } from "next/server";
import { supabase } from "../../supabaseClient";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { identification, password } = await req.json();
    const userIdInt = Number(identification?.trim());
    if (isNaN(userIdInt) || !password) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    // Buscar usuario por ID
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userIdInt)
      .limit(1);

    if (error) {
      return NextResponse.json({ error: "Error de conexión" }, { status: 500 });
    }
    if (!users || users.length === 0) {
      return NextResponse.json({ error: "Identificación o contraseña incorrecta" }, { status: 401 });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Identificación o contraseña incorrecta" }, { status: 401 });
    }

    // Opcional: puedes devolver datos del usuario (sin la contraseña)
    return NextResponse.json({ success: true, user: { user_id: user.user_id, user_fname: user.user_fname } });
  } catch (err) {
    return NextResponse.json({ error: "Error inesperado" }, { status: 500 });
  }
}
