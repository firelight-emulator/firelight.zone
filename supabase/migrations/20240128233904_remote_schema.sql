create policy "Enable read access for all users"
on "public"."game_external_links"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."game_release_external_links"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."game_releases"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."games"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."regions"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."rom_external_links"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."roms"
as permissive
for select
to public
using (true);



