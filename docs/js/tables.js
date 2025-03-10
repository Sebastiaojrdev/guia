document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("table").forEach((table) => {
        if (!table.classList.contains("no-datatable")) { // Permite tabelas sem DataTables
            $(table).DataTable({
                paging: true,        // Ativa paginação
                searching: true,     // Ativa pesquisa
                ordering: true,      // Ativa ordenação nas colunas
                info: true,          // Mostra informações da tabela
                lengthMenu: [5, 10, 25, 50, 100], // Define quantas linhas exibir
                language: {
                    search: "Pesquisar:",
                    lengthMenu: "Mostrar _MENU_ registros por página",
                    info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
                    infoFiltered: "(filtrado de _MAX_ registros totais)",
                    paginate: {
                        first: "Primeiro",
                        last: "Último",
                        next: "Próximo",
                        previous: "Anterior"
                    }
                }
            });
        }
    });
});
